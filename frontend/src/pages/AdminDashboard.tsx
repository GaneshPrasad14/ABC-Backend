import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Trash2, LogOut, Edit } from "lucide-react";

interface Project {
    _id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    description: string;
    services: string[];
}

const CATEGORIES = [
    "IT Park",
    "Hospital",
    "Shopping Mall",
    "Factory & Warehouse",
    "Commercial Building",
    "Residential",
];

export default function AdminDashboard() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        location: "",
        year: "",
        description: "",
        services: "",
    });
    const [file, setFile] = useState<File | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { toast } = useToast();
    const navigate = useNavigate();

    const fetchProjects = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects`);
            setProjects(data);
        } catch (error) {
            console.error("Error fetching projects", error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCategoryChange = (value: string) => {
        setFormData({ ...formData, category: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/admin/login");
    };

    const handleEdit = (project: Project) => {
        setEditingId(project._id);
        setFormData({
            title: project.title,
            category: project.category,
            location: project.location,
            year: project.year,
            description: project.description,
            services: project.services.join(", "),
        });
        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setFormData({
            title: "",
            category: "",
            location: "",
            year: "",
            description: "",
            services: "",
        });
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        const data = new FormData();
        data.append("title", formData.title);
        data.append("category", formData.category);
        data.append("location", formData.location);
        data.append("year", formData.year);
        data.append("description", formData.description);
        data.append("services", formData.services);
        if (file) {
            data.append("image", file);
        }

        try {
            if (editingId) {
                await axios.put(
                    `${import.meta.env.VITE_API_BASE_URL}/projects/${editingId}`,
                    data,
                    { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
                );
                toast({ title: "Project Updated Successfully" });
            } else {
                await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/projects`,
                    data,
                    { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
                );
                toast({ title: "Project Added Successfully" });
            }

            setFormData({
                title: "",
                category: "",
                location: "",
                year: "",
                description: "",
                services: "",
            });
            setFile(null);
            setEditingId(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
            fetchProjects();
        } catch (error) {
            toast({
                title: editingId ? "Error updating project" : "Error adding project",
                description: "Please check your inputs",
                variant: "destructive",
            });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        const token = localStorage.getItem("token");

        try {
            await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/projects/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast({ title: "Project Deleted" });
            fetchProjects();
        } catch (error) {
            toast({ title: "Error deleting project", variant: "destructive" });
        }
    };

    return (
        <div className="container mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <Button variant="destructive" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Add/Edit Project Form */}
                <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">{editingId ? "Edit Project" : "Add New Project"}</h2>
                        {editingId && <Button variant="outline" size="sm" onClick={cancelEdit}>Cancel Edit</Button>}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input name="title" placeholder="Project Title" value={formData.title} onChange={handleChange} required />

                        <Select onValueChange={handleCategoryChange} value={formData.category} required>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {CATEGORIES.map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                        {cat}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
                        <Input name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Image</label>
                            <Input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" required={!editingId} />
                            <p className="text-xs text-gray-500 mt-1">{editingId ? "Leave empty to keep existing image" : "Upload an image"}</p>
                        </div>

                        <Textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                        <Input name="services" placeholder="Services (comma separated)" value={formData.services} onChange={handleChange} required />
                        <Button type="submit" className="w-full">{editingId ? "Update Project" : "Add Project"}</Button>
                    </form>
                </div>

                {/* Project List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Existing Projects</h2>
                    {projects.map((project) => (
                        <div key={project._id} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                            <img
                                src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${project.image}`}
                                alt={project.title}
                                className="w-24 h-24 object-cover rounded-md"
                                onError={(e) => {
                                    // Fallback if image load fails or is an old URL
                                    if (project.image.startsWith('http')) {
                                        (e.target as HTMLImageElement).src = project.image
                                    }
                                }}
                            />
                            <div className="flex-1">
                                <h3 className="font-bold">{project.title}</h3>
                                <p className="text-sm text-gray-500">{project.category} • {project.year}</p>
                                <div className="mt-2 flex gap-2">
                                    <Button variant="outline" size="sm" onClick={() => handleEdit(project)}>
                                        <Edit className="w-4 h-4 mr-1" /> Edit
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => handleDelete(project._id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

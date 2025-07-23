import { useState } from "react";
import { classes, boards } from "./data/courseData";
import { Button } from "./components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedBoard, setSelectedBoard] = useState("");

    const handleProceed = () => {
        if (selectedClass && selectedBoard) {
            window.location.href = `/subjects/${selectedClass}/${selectedBoard}`;
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">
                            Select Your Course
                            
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Choose your class and board to access personalized learning content
                        </p>
                    </div>

                    <div className="bg-[#1e293b] rounded-xl p-8 border border-[#1e293b] shadow-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Select Class */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">
                                    Select Class
                                </label>
                                <Select value={selectedClass} onValueChange={setSelectedClass}>
                                    <SelectTrigger className="w-full bg-[#1e293b] border border-[#334155] text-white">
                                        <SelectValue placeholder="Choose your class" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1e293b] text-white border border-[#334155]">
                                        {classes.map((cls) => (
                                            <SelectItem key={cls} value={cls}>
                                                Class {cls}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Select Board */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">
                                    Select Board
                                </label>
                                <Select value={selectedBoard} onValueChange={setSelectedBoard}>
                                    <SelectTrigger className="w-full bg-[#1e293b] border border-[#334155] text-white">
                                        <SelectValue placeholder="Choose your board" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1e293b] text-white border border-[#334155]">
                                        {boards.map((board) => (
                                            <SelectItem key={board} value={board}>
                                                {board}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Button
                            onClick={handleProceed}
                            disabled={!selectedClass || !selectedBoard}
                            className="w-full py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-blue-300 text-black transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed"
                        >
                            Proceed to Subjects
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;

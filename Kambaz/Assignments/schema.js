import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        course: { type: String, ref: "CourseModel" },
        available: Date,
        due: Date,
        points: String,
        description: String,
    },
    { collection: "assignments" }
);
export default schema;
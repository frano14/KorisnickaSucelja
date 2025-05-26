import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
			default: "",
		},
		password: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		lastLogin: {
			type: Date,
			default: Date.now,
		},
        status: {
            type: String,
            enum: ["Online", "Away", "Offline"],
            default: "Offline",
        },
        year: {
            type: Number,
        },
        sessions: {
            type: [Date],
			default: []
        },
        messages: {
            type: [String],
        },
        obligations: {
            type: [String],
        },
		isPshy: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema);
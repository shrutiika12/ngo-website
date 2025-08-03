"use client";

import { useState } from "react";

export default function ContactPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="ml-200 mt-60 p-8 bg-white/80 rounded-xl shadow-xl max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-green-900">Get in Touch 📞</h1>

            <p className="text-lg mb-6">
                We&apos;d love to hear from you! Whether you want to collaborate, partner with us, or simply say hello.
            </p>

            <div className="mb-6">
                <p className="text-xl font-semibold text-lime-900">📍 Pune, India</p>
                <p className="text-xl font-semibold text-lime-900">📧 contact@greenfuture.org</p>
                <p className="text-xl font-semibold text-lime-900">📞 +91 9999888822</p>
            </div>

            <button
                onClick={() => setShowModal(true)}
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300">
                Send us a message
            </button>


            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-[400px] relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-4 text-gray-600 text-2xl font-bold">
                            &times;
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-green-900">Message Us 🌿</h2>
                        <form className="flex flex-col space-y-4">
                            <input type="text" placeholder="Your Name" className="border p-2 rounded" />
                            <input type="email" placeholder="Your Email" className="border p-2 rounded" />
                            <textarea placeholder="Your Message" rows={3} className="border p-2 rounded"></textarea>

                            <button type="submit" className="bg-green-700 text-white p-2 rounded hover:bg-green-800">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

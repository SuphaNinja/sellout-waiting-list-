"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from "axios"
import { Loader2 } from "lucide-react"

export default function Testing() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const joinWaitlist = async () => {
        setIsLoading(true)
        
        try {
            await axios.post('http://localhost:3000/api/send-welcome-email', { email })
            // Clear the email input after successful submission
            setEmail("")
        } catch (error) {
            console.error('Error joining waitlist:', error)
           
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Join our waitlist</h2>
            <div className="flex flex-col gap-4">
                <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    className="bg-white p-4 rounded-md text-black"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                    onClick={joinWaitlist}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Joining...
                        </>
                    ) : (
                        "Join the waitlist"
                    )}
                </Button>
            </div>
        </div>
    )
}
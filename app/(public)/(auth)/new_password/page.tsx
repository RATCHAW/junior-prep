import NewPassword from "@/components/auth/NewPassword"
import ResetPassword from "@/components/auth/ResetPassword"
import VerificationResult from "@/components/auth/VerificationResult"
import { Icons } from "@/components/icons"
import React from "react"

function NewPasswordPage() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-10 pt-12">
            <NewPassword />
        </div>
    )
}

export default NewPasswordPage

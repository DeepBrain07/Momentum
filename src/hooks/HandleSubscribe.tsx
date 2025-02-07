import { toast } from "react-toastify";

/**
 * Validates an email format using regex.
 * @param email - The email string to validate.
 * @returns boolean - True if valid, false otherwise.
 */
export const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Handles the subscription process.
 * @param email - The user's email input.
 * @param setEmail - The state setter function for clearing input.
 */
export const handleSubscribe = (email: string, setEmail: (value: string) => void) => {
    if (!email) {
        toast.error("Please enter an email!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
        return;
    }

    if (!isValidEmail(email)) {
        toast.error("Invalid email format!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
        return;
    }

    toast.success("Subscribed successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    });

    // Clear the input field after successful subscription
    setEmail("");
};

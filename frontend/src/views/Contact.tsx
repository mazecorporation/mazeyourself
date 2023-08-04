import React, { useRef } from "react";
import Footer from "../components/Footer";
import Input from "../components/input";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

const Contact = () => {
    const form = useRef<any>();
    const [contactForm, setContactForm] = React.useState<any>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const [state, handleSubmit] = useForm("xnqknogy");

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setContactForm((prev: any) => ({ ...prev, [name]: value }));
    };

    const isAllEmptyExceptLastName = Object.keys(contactForm).every(
        (key) => key === "lastName" || contactForm[key] === ""
    );

    const intervalRef = useRef<any>(null);
    // const sendContactForm = async (e: any) => {
    //     e.preventDefault()
    //     emailjs.sendForm('service_im7covq', 'template_n4rnd84', form.current, '5YC0b2XDwHRIxp1vV')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    const showToast = (
        message: string,
        type: "success" | "error" = "success"
    ) => {
        toast[type](message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true
        });
    };

    const sendContactForm = () => {
        if (state?.errors?.length > 0) {
            showToast(state?.errors[0]?.message, "error");
        }
        setContactForm({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: ""
        });
        clearInterval(intervalRef.current);
    };

    if (!!state?.succeeded) {
        showToast("Your message has been sent successfully!", "success");
        form.current.reset();
    }
    return (
        <div className="sm:pt-10  pt-4 sm:px-24 px-4 bg-[#2C2C2C]  h-full">
            {/* Navbar */}
            <Navbar theme={"dark"} />

            {/* Contact */}

            {state.submitting && (
                <div className="flex flex-col items-center justify-center h-screen z-10">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
                    <div className="text-2xl font-bold mt-4 font-spaceGrotesk text-white">
                        Sumbitting...
                    </div>
                </div>
            )}


            <div className="mt-10">
                <div className="sm:text-6xl text-lg text-white font-spaceGrotesk">
                    Contact Us🗽🌆
                </div>

                <div className="flex sm:flex-row flex-col sm:items-start justify-between mt-3">
                    <p className="sm:w-1/2 w-full  text-base text-white">
                        Thank you for using Maze! We value your feedback and are here to
                        assist you with any inquiries or concerns you may have. Please don't
                        hesitate to reach out to us using the contact information provided.
                    </p>
                    <div className="sm:w-1/2 w-full sm:mt-0 mt-4 sm:ml-8 ml-0">
                        <form
                            ref={form}
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (state.submitting) return;
                                handleSubmit(e);
                                intervalRef.current = setInterval(() => {
                                    sendContactForm();
                                }, 1000);
                            }}>
                            <div className="flex sm:flex-row flex-col items-center w-full justify-between">
                                <Input
                                    placeholder="First Name*"
                                    value={contactForm.firstName}
                                    onChange={(e) => handleChange(e)}
                                    name="firstName"
                                    containerStyle="w-full"
                                    wrapperStyle="w-full"
                                />
                                <Input
                                    placeholder="Last Name"
                                    value={contactForm.lastName}
                                    onChange={(e) => handleChange(e)}
                                    name="lastName"
                                    containerStyle="w-full"
                                    wrapperStyle="w-full sm:ml-4 ml-0 sm:mt-0 mt-6"
                                />
                            </div>
                            <Input
                                placeholder="Email*"
                                value={contactForm.email}
                                onChange={(e) => handleChange(e)}
                                name="email"
                                containerStyle="w-full mt-6"
                            />
                            <Input
                                placeholder="Phone Number (optional)"
                                value={contactForm.phoneNumber}
                                onChange={(e) => handleChange(e)}
                                name="phoneNumber"
                                containerStyle="w-full mt-6"
                            />
                            <textarea
                                className="w-full mt-6 h-32 rounded-lg border-[1px] border-white focus:outline-none p-2 bg-transparent text-white"
                                placeholder="Message*"
                                value={contactForm.message}
                                onChange={(e) => handleChange(e)}
                                name="message"
                            />
                            <button
                                className={`rounded-lg border-[1px] border-white bg-black text-white w-full p-3 mt-6 mb-8 ${isAllEmptyExceptLastName ? 'cursor-not-allowed' : ''}`}
                                disabled={isAllEmptyExceptLastName}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer theme="dark" />
        </div>
    );
};

export default Contact;

import { Label, TextInput } from "flowbite-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whyContact: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const MAX_MESSAGE_LENGTH = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_MESSAGE_LENGTH) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message. Please try again.");
      }

      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        whyContact: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage(error.message || "An error occurred. Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center py-10 px-4'>
      <div className='max-w-4xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
        <p className='text-gray-800 dark:text-white text-lg mb-4'>
          If you have any questions or concerns, don&apos;t hesitate to reach
          out. I&apos;m always happy to assist! Alternatively, you can email me
          at
          <a
            href='mailto:imkawsar007@gmail.com'
            className='text-blue-500 underline ml-1'>
            imkawsar007@gmail.com
          </a>
          .
        </p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Label htmlFor='name' className='mb-2'>
                Name <span className='text-red-500'>*</span>
              </Label>
              <TextInput
                id='name'
                name='name'
                required
                className='dark:bg-gray-700 dark:text-white'
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor='email' className='mb-2'>
                Email <span className='text-red-500'>*</span>
              </Label>
              <TextInput
                id='email'
                name='email'
                type='email'
                required
                className='dark:bg-gray-700 dark:text-white'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Label htmlFor='whyContact' className='mb-2'>
                Why Contact <span className='text-red-500'>*</span>
              </Label>
              <TextInput
                id='whyContact'
                name='whyContact'
                required
                className='dark:bg-gray-700 dark:text-white'
                placeholder='Why Contact'
                value={formData.whyContact}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor='phone' className='mb-2'>
                Phone <span className='text-gray-400'>(optional)</span>
              </Label>
              <TextInput
                id='phone'
                name='phone'
                type='tel'
                className='dark:bg-gray-700 dark:text-white'
                placeholder='Enter your phone number'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Label htmlFor='message' className='mb-2'>
              Message <span className='text-red-500'>*</span>
            </Label>
            <textarea
              id='message'
              name='message'
              rows='5'
              required
              className='w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your message'
              value={formData.message}
              onChange={handleChange}></textarea>
            <p className='text-gray-500 text-sm text-right'>
              {MAX_MESSAGE_LENGTH - formData.message.length} characters
              remaining
            </p>
          </div>

          {successMessage && (
            <p className='text-green-500 text-sm'>{successMessage}</p>
          )}
          {errorMessage && (
            <p className='text-red-500 text-sm'>{errorMessage}</p>
          )}

          <div>
            <button
              type='submit'
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

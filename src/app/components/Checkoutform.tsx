import { useForm } from "react-hook-form";
import { FC } from "react";

// List of Pakistani cities
const cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Peshawar",
  "Quetta",
  "Multan",
  "Sialkot",
  "Faisalabad",
  "Gujranwala",
  "Bahawalpur",
  "Sargodha",
  "Swat",
  "Abbottabad",
];

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

const CheckoutForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // Handle the form submission
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Checkout Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-lg font-medium">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", { required: "Full Name is required" })}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-lg font-medium">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-lg font-medium">Address</label>
          <textarea
            id="address"
            placeholder="Enter your address"
            {...register("address", { required: "Address is required" })}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        {/* City Dropdown */}
        <div>
          <label htmlFor="city" className="block text-lg font-medium">City</label>
          <select
            id="city"
            {...register("city", { required: "City is required" })}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
          >
            <option value="">Select your city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postalCode" className="block text-lg font-medium">Postal Code</label>
          <input
            id="postalCode"
            type="text"
            placeholder="Enter your postal code"
            {...register("postalCode", { required: "Postal Code is required" })}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
          />
          {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message}</p>}
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-lg font-medium">Country</label>
          <input
            id="country"
            value="Pakistan"
            readOnly
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button type="submit" className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Complete Checkout
          </button>
        </div>

        {/* Note */}
        <div className="mt-4 text-sm text-gray-500">
          <p>Note: You will receive a confirmation call after your order is processed.</p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "@/components/BookingForm";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  let profile = null;

  if (session?.user?.token) {
    try {
      const profileData = await getUserProfile(session.user.token);
      profile = profileData.data;
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#0a0a0a]">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="relative text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Venue Booking
        </h1>
        
        {/* Display User Profile if logged in */}
        {profile && (
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">User Profile</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-400">
              <div>
                <span className="font-medium">Name:</span> {profile.name}
              </div>
              <div>
                <span className="font-medium">Email:</span> {profile.email}
              </div>
              <div>
                <span className="font-medium">Tel:</span> {profile.tel}
              </div>
              <div>
                <span className="font-medium">Member Since:</span> {new Date(profile.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}

        <BookingForm />
      </div>
    </div>
  );
}
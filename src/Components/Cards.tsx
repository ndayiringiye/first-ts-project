import type { PersonProps } from "./type"
import { User, MapPin, Users, FileText } from "lucide-react"

function Cards({ name, age, address, clan, briefs }: PersonProps) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <User className="w-5 h-5" />
          Personal Details
        </h1>
      </div>

      
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Name</p>
            <p className="text-gray-900 font-semibold">{name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold text-sm">{age}</span>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Age</p>
            <p className="text-gray-900 font-semibold">{age} years old</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Address</p>
            <p className="text-gray-900 font-semibold">{address}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Clan</p>
            <p className="text-gray-900 font-semibold">{clan}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            <FileText className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 font-medium">Briefs</p>
            <p className="text-gray-900 font-semibold leading-relaxed">{briefs}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards

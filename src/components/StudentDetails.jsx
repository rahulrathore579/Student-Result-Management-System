import { ArrowLeft, User, BookOpen, Award, Hash } from 'lucide-react';

function StudentDetails({ student, onBack }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Student Details</h2>
          <button
            onClick={onBack}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-md flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to List
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Student ID</p>
                <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Hash className="w-4 h-4 text-gray-600" />
                  {student.id}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Full Name</p>
                <p className="text-lg font-semibold text-gray-800">{student.name}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-700">Academic Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Section</p>
                <p className="text-lg font-semibold text-gray-800">{student.section}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Marks</p>
                <p className="text-lg font-semibold text-gray-800">{student.marks} / 100</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6 border-l-4 border-yellow-500">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-yellow-600" />
              <h3 className="text-lg font-semibold text-gray-700">Performance</h3>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Grade Achieved</p>
              <span className={`px-6 py-3 inline-flex text-xl font-bold rounded-lg ${
                student.grade.startsWith('A') ? 'bg-green-200 text-green-800' :
                student.grade.startsWith('B') ? 'bg-blue-200 text-blue-800' :
                student.grade.startsWith('C') ? 'bg-yellow-200 text-yellow-800' :
                'bg-red-200 text-red-800'
              }`}>
                {student.grade}
              </span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Performance Status:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                student.marks >= 90 ? 'bg-green-100 text-green-800' :
                student.marks >= 75 ? 'bg-blue-100 text-blue-800' :
                student.marks >= 60 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {student.marks >= 90 ? 'Excellent' :
                 student.marks >= 75 ? 'Good' :
                 student.marks >= 60 ? 'Average' :
                 'Needs Improvement'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;

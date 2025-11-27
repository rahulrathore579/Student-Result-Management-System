import { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getAllStudents, createStudent, updateStudent, deleteStudent } from './services/studentService';
import Header from "./components/Header";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [mode, setMode] = useState('list');

  const handleLoadStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
      alert('Students loaded successfully!');
    } catch (error) {
      alert('Error loading students. Make sure JSON Server is running on port 3000.');
    }
  };

  const handleAddStudent = () => {
    setSelectedStudent(null);
    setMode('add');
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setMode('edit');
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setMode('details');
  };

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      alert('Student deleted successfully! Click "Load Students" to refresh the list.');
    } catch (error) {
      alert('Error deleting student.');
    }
  };

  const handleSubmitForm = async (studentData) => {
    try {
      if (mode === 'add') {
        await createStudent(studentData);
        alert('Student added successfully! Click "Load Students" to see the updated list.');
      } else if (mode === 'edit') {
        await updateStudent(selectedStudent.id, studentData);
        alert('Student updated successfully! Click "Load Students" to see the changes.');
      }
      setMode('list');
      setSelectedStudent(null);
    } catch (error) {
      alert(`Error ${mode === 'add' ? 'adding' : 'updating'} student.`);
    }
  };

  const handleCancel = () => {
    setMode('list');
    setSelectedStudent(null);
  };

  const handleBackToList = () => {
    setMode('list');
    setSelectedStudent(null);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {mode === 'list' && (
        <StudentList
          students={students}
          onLoadStudents={handleLoadStudents}
          onAddStudent={handleAddStudent}
          onEditStudent={handleEditStudent}
          onDeleteStudent={handleDeleteStudent}
          onViewDetails={handleViewDetails}
        />
      )}

      {(mode === 'add' || mode === 'edit') && (
        <StudentForm
          student={selectedStudent}
          onSubmit={handleSubmitForm}
          onCancel={handleCancel}
        />
      )}

      {mode === 'details' && (
        <StudentDetails
          student={selectedStudent}
          onBack={handleBackToList}
        />
      )}


    </div>
  );
}

export default App;

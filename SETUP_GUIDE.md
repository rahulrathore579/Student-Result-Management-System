# Student Management System - Setup Guide

## Quick Start Guide

Follow these simple steps to run the Student Management Application:

### Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages including React, JSON Server, and other dependencies.

### Step 2: Start the JSON Server (Backend)

Open a **first terminal** and run:

```bash
npm run server
```

You should see:
```
JSON Server started on PORT :3000
```

**Important:** Keep this terminal running! This is your backend database server.

### Step 3: Start the React Application (Frontend)

Open a **second terminal** and run:

```bash
npm run dev
```

You should see:
```
VITE ready in X ms
Local: http://localhost:5173/
```

### Step 4: Open the Application

Open your web browser and go to:
```
http://localhost:5173/
```

## How to Use the Application

### 1. Load Students
- Click the **"Load Students"** button to fetch all students from the database
- You'll see a table with all student records

### 2. Add a New Student
- Click the **"Add Student"** button
- Fill in the form:
  - Name (e.g., "John Doe")
  - Section (e.g., "A", "B", "C")
  - Marks (0-100)
  - Grade (e.g., "A+", "B", "C+")
- Click **"Add Student"** to save
- Click **"Load Students"** again to see the new student

### 3. View Student Details
- Click the **eye icon** next to any student
- You'll see full details in a beautiful card layout
- Click **"Back to List"** to return

### 4. Edit Student Information
- Click the **pencil icon** next to any student
- Update the information in the form
- Click **"Update Student"** to save changes
- Click **"Load Students"** to see updated information

### 5. Delete a Student
- Click the **trash icon** next to any student
- Confirm the deletion
- Click **"Load Students"** to refresh the list

## Important Notes

### Why Click "Load Students"?

The application uses **useState** only (no useEffect as per requirements). This means:
- Data loads only when you click the button
- After any Add/Edit/Delete operation, you must click "Load Students" to refresh
- This is intentional to meet the project requirements

### Troubleshooting

**Problem:** "Error loading students" message appears
**Solution:** Make sure JSON Server is running on port 3000
```bash
npm run server
```

**Problem:** Port already in use
**Solution:** Kill the process using that port or change the port:
```bash
# For JSON Server (change in package.json)
"server": "json-server --watch db.json --port 3001"

# For Vite (it usually auto-assigns a new port)
```

**Problem:** Changes don't appear
**Solution:** Click "Load Students" button to refresh the data

## Project Structure

```
student-result-app/
│
├── db.json                          # JSON Server Database
│
├── src/
│   ├── components/
│   │   ├── StudentList.jsx         # Display students + actions
│   │   ├── StudentForm.jsx         # Add/Edit form
│   │   └── StudentDetails.jsx      # View full details
│   │
│   ├── services/
│   │   └── studentService.js       # All API calls
│   │
│   ├── App.jsx                     # Main app logic
│   └── main.jsx                    # React entry point
│
└── package.json                    # Dependencies & scripts
```

## API Endpoints

JSON Server automatically creates these endpoints:

- `GET http://localhost:3000/students` - Get all students
- `GET http://localhost:3000/students/:id` - Get one student
- `POST http://localhost:3000/students` - Create student
- `PUT http://localhost:3000/students/:id` - Update student
- `DELETE http://localhost:3000/students/:id` - Delete student

## Sample Student Data

The `db.json` file contains 5 sample students:
1. Alice Johnson - Section A - 95 marks - Grade A+
2. Bob Smith - Section B - 82 marks - Grade A
3. Charlie Brown - Section A - 78 marks - Grade B+
4. Diana Prince - Section C - 91 marks - Grade A+
5. Ethan Hunt - Section B - 67 marks - Grade C+

## Development Commands

```bash
# Install dependencies
npm install

# Start JSON Server (Backend)
npm run server

# Start Vite React App (Frontend)
npm run dev

# Build for production
npm run build

# Check for code issues
npm run lint
```

## Tech Stack Used

- **React** - UI Framework (Functional Components)
- **useState** - State Management Hook
- **JSON Server** - Mock REST API Backend
- **Fetch API** - HTTP Requests
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Success Checklist

- [ ] JSON Server running on port 3000
- [ ] React app running on port 5173
- [ ] Can click "Load Students" and see data
- [ ] Can add a new student
- [ ] Can edit existing student
- [ ] Can delete a student
- [ ] Can view student details
- [ ] All buttons working correctly

## Need Help?

1. Make sure both terminals are running (JSON Server + Vite)
2. Check that ports 3000 and 5173 are not blocked
3. Clear browser cache if seeing old data
4. Restart both servers if needed

---

**Congratulations!** You now have a fully functional Student Management System with CRUD operations.

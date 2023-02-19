import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/Scrolling/scrollToTop";
import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Courses from "./Pages/Courses/Courses";
import CourseDetails from "./Pages/Courses/CourseDetails";
import TeacherDetails from "./Pages/About/TeacherDetails";

const App = () => {
    return (
        <div>
            <HashRouter>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/course-details/:id' element={<CourseDetails />} />
                    <Route path='/teacher-details/:id' element={<TeacherDetails />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
};

export default App;
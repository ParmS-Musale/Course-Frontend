import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddCourseForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFormError('');

    // Prepare the data to send to the API
    const courseData = {
      title: data.title,
      description: data.description,
      courseDescription: data.courseDescription,
      price: parseFloat(data.price), // Ensure price is a number
      imageUrl: data.imageUrl,
      // createdAt: new Date().toISOString(),
      // updatedAt: new Date().toISOString(),
    };

    try {
      const response = await axios.post('http://localhost:5020/admin/courses',courseData);
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to add course');
      }

      const result = await response.json();
      console.log('Course added successfully:', result);
      // Optionally reset the form or show success message
    } catch (error) {
      setFormError(error.message);
      console.error('Error adding course:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const navigate = useNavigate()
  useEffect(()=>{

    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login")
    }

  },[])

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-6">Add New Course</h2>

      {formError && (
        <div className="text-red-500 mb-4">
          <p>{formError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Title</label>
          <input
            type="text"
            {...register('title', { required: 'Course title is required' })}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter course title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            {...register('description', { required: 'Description is required' })}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a brief description"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Course Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Description</label>
          <textarea
            {...register('courseDescription', { required: 'Course description is required' })}
            rows="4"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter detailed course description"
          />
          {errors.courseDescription && <p className="text-red-500 text-sm">{errors.courseDescription.message}</p>}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            {...register('price', { required: 'Price is required', valueAsNumber: true })}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            {...register('imageUrl', { required: 'Image URL is required' })}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
          {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Adding Course...' : 'Add Course'}
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;
"use client"

import React, { useState } from 'react';
import { v4 } from 'uuid';
import Header from '../(components)/Header';
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form
} from "@/components/ui/form"

import { Button } from '@/components/ui/button';
import CustomFormField from '../(components)/customformfield';
import { UserFormValidation } from '@/lib/validation';
import SubmitButton from '../(components)/submitbutton';

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton"
}




type ProductFormData = {
    name: string;
    description: string;
    measurement: string;
}

type CreateProductProps = {
    isOpen: boolean;
    onClose: () => void;
    // onCreate: (formData: ProductFormData) => void; 
}

const CreateProductModal = ({isOpen, onClose}: CreateProductProps) => {
    if (!isOpen) return null;

    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
        },
      })
    
    function onSubmit(values: z.infer<typeof UserFormValidation>) {
      setIsLoading(true);
      try {
        console.log(values)
      } catch (error) {
        console.log(error);
      }
    }

    return (
        

    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20 p-20' >
        <div className='relative top-20 mx-auto border w-96 xl:w-[1024px] shadow-lg rounded-md bg-white p-10' >
            <Header name="Create New Product" />
            <hr/>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <CustomFormField 
            inputType={FormFieldType.INPUT}
            control={form.control} 
            name="name"
            label="Product Name"
            placeholder="Product Name"
            iconSrc=""
            iconAlt="product icon"
            />
        <CustomFormField 
            inputType={FormFieldType.PHONE_INPUT}
            control={form.control} 
            name="email"
            label="Product Name"
            placeholder="Product Name"
            iconSrc=""
            iconAlt="product icon"
            />
        <SubmitButton isLoading={isLoading}>Add Product</SubmitButton>
      </form>
    </Form>
        </div>
    </div>
  )
}

export default CreateProductModal
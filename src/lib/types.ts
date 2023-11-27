import { z } from 'zod'

export const FormSchema = z.object({
    email: z.string().describe('Email').email({ message: 'Invalid Email' }),
    password: z.string().describe('Password').min(6, 'Password must be at least 6 characters long'),
});

export const CreateWorkspaceFormSchema = z.object({
    workspaceName: z
    .string()
    .describe('Workspace Name')
    .min(3, 'Workspace name must be at least 3 characters long'),
    logo: z.any(),
})

export const UploadBannerFormSchema = z.object({
    banner: z.string().describe('Banner Image'),
  });
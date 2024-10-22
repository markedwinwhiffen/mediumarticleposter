import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Layout from "@/components/layout"
import Link from "next/link"

export default function CreatePost() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" className="mr-2">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Create New Post</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button className="bg-[#00ab6c] text-white">Publish</Button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter your post title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <ToggleGroup type="single" defaultValue="markdown">
              <ToggleGroupItem value="markdown">Markdown</ToggleGroupItem>
              <ToggleGroupItem value="html">HTML</ToggleGroupItem>
            </ToggleGroup>
            <Textarea className="min-h-[300px]" id="content" placeholder="Write your post content here..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (max 3)</Label>
            <Input id="tags" placeholder="Enter tags separated by commas" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Publish Status</Label>
            <Select>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="unlisted">Unlisted</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="publication">Publication</Label>
            <Select>
              <SelectTrigger id="publication">
                <SelectValue placeholder="Select publication" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech-insights">Tech Insights</SelectItem>
                <SelectItem value="personal-blog">Personal Blog</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Featured Image</Label>
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <ImageIcon className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500">Drag and drop an image here, or click to select a file</p>
              <Input className="hidden" id="image-upload" type="file" />
              <Button className="mt-2" variant="outline">
                Upload Image
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}
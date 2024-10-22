import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Layout from "@/components/layout"
import Link from "next/link"

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Welcome, John Doe</h1>
          <Link href="/create-post">
            <Button className="bg-[#00ab6c] text-white">Create New Post</Button>
          </Link>
        </div>
        <Tabs defaultValue="posts">
          <TabsList>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Input className="flex-1" placeholder="Search posts..." type="search" />
                <Button variant="outline">Filter</Button>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg border p-4">
                  <h2 className="text-xl font-semibold mb-2">My First Post</h2>
                  <p className="text-gray-500 mb-4">Published on Jan 1, 2024</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Edit</Button>
                    <Button variant="outline">View Stats</Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h2 className="text-xl font-semibold mb-2">Draft: New Ideas</h2>
                  <p className="text-gray-500 mb-4">Last edited on Jan 5, 2024</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Edit</Button>
                    <Button variant="outline">Publish</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="publications">
            <div className="grid gap-4">
              <div className="rounded-lg border p-4">
                <h2 className="text-xl font-semibold mb-2">Tech Insights</h2>
                <p className="text-gray-500 mb-4">3 contributors</p>
                <Button variant="outline">Manage</Button>
              </div>
              <div className="rounded-lg border p-4">
                <h2 className="text-xl font-semibold mb-2">Personal Blog</h2>
                <p className="text-gray-500 mb-4">1 contributor</p>
                <Button variant="outline">Manage</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
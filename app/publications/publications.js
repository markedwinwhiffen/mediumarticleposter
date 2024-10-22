import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Layout from "@/components/layout"
import Link from "next/link"

export default function Publications() {
  return (
    <Layout>
      <div className="p-4 md:p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Your Publications</h2>
            <Dialog>
              <DialogTrigger  asChild>
                <Button className="bg-[#00ab6c] text-white">Create New Publication</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Publication</DialogTitle>
                  <DialogDescription>Enter the details for your new publication.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Publication Name</Label>
                    <Input id="name" placeholder="Enter publication name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Enter publication description" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Create Publication</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Publication Name</TableHead>
                <TableHead>Contributors</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Tech Insights</TableCell>
                <TableCell>3 contributors</TableCell>
                <TableCell>
                  <Button variant="outline">Manage Contributors</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Personal Blog</TableCell>
                <TableCell>1 contributor</TableCell>
                <TableCell>
                  <Button variant="outline">Manage Contributors</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  )
}
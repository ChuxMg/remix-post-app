/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eEG1VZVcWzR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

export default function NewNoteForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Post</CardTitle>
        <CardDescription>
          Fill out the form below to create a new blog post.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form method="post" className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="Enter a title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Write your post content here..."
              className="min-h-[200px]"
            />
          </div>
          <Button type="submit">Publish Post</Button>
        </form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

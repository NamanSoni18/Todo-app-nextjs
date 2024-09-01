import Form from "../ui/Form";
import Input from "../ui/Input";
import { Button } from "@/components/ui/Button";
import { create } from "@/app/actions/todoActions";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input name="input" type="text" placeholder="Add Todo.." />
        <Button>Add</Button>
      </div>
    </Form>
  );
};

export default AddTodo;

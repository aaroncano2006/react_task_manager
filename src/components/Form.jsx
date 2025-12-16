import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/task";

function Form({ children }) {
  const methods = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        id="form-tasca"
        className="mt-3 ms-5 align-items-center"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;

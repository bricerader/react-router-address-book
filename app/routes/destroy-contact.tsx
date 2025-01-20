import {deleteContact} from "../data";
import type {Route} from "../../.react-router/types/app/routes/+types/destroy-contact";
import {redirect} from "react-router";

export async function action({ params }: Route.ActionArgs ) {
  await deleteContact(params.contactId);
  return redirect('/')
}

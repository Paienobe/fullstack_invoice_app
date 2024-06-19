import { Invoice } from "../../../services/api_response_types/invoice";

export type FormData = Omit<Invoice, "id" | "created_at">;

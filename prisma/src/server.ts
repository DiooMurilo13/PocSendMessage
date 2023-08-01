import Fastify from "fastify";
import cors from "@fastify/cors";
import { notificationRoutes } from "./routes/notification.routes";

const app = Fastify();

app.register(cors);
app.register(notificationRoutes);

app.listen(3333, "IPv4 PADRAO DA SUA MAQUINA", () =>
  console.log("on in port:3333")
);

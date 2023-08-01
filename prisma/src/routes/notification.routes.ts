import WebPush from "web-push";
import { FastifyInstance } from "fastify";
import z from "zod";

//para conseguir os public/private abaixo, use o metodo console.log(WebPush.generateVAPIDKeys());

const publicKey = "public key";
const privateKey = "private key";
const subject = "http://localhost ou ipv4:3333";

WebPush.setVapidDetails(subject, publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get("/public_key", () => {
    return {
      publicKey,
    };
  });

  app.post("/send", (request, reply) => {
    console.log("to no senddd");
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    });

    const { subscription } = sendPushBody.parse(request.body);

    WebPush.sendNotification(subscription);
    return reply.status(201).send;
  });
}

import { useEffect } from "react";
import { api } from "./api/axios";

export default function Home() {
  function sendMessage() {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(async (serviceWorker) => {
        //valida se você já está autenticado com o serviço de mensagem.
        let subscription = await serviceWorker.pushManager.getSubscription();

        if (!subscription) {
          //Get de public key do backend
          const publicKeyResponse = await api.get("/public_key");
          subscription = await serviceWorker.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: publicKeyResponse.data.publicKey,
          });
        }

        await api.post("/send", {
          subscription,
        });
      });
  }
  //a
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-1 h-full justify-center">
        <div className="flex items-center">
          <button
            onClick={() => sendMessage()}
            className="p-2 rounded-xl bg-blue-200"
          >
            CLICA AI
          </button>
        </div>
      </div>
    </div>
  );
}

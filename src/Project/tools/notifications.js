import Notification from "./notification";

export function notify(msg) {
  return new Notification({ text: msg });
}

export function notifyError(msg) {
  return new Notification({
    text: msg,
    style: {
      background: "#DC2626",
      color: "#ffffff",
      transition: "all 350ms linear",
    },
  });
}

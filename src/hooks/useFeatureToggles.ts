import { useState, useEffect } from "react";

const envEnableAssistant = import.meta.env.VITE_ENABLE_ASSISTANT !== "false";
const envEnableFilters = import.meta.env.VITE_ENABLE_FILTERS !== "false";

export function useFeatureToggles() {
  const [enableAssistant, setEnableAssistant] = useState<boolean>(() => {
    if (!envEnableAssistant) return false;
    if (typeof window === "undefined") return true;
    return localStorage.getItem("cs_enable_assistant") !== "false";
  });

  const [enableFilters, setEnableFilters] = useState<boolean>(() => {
    if (!envEnableFilters) return false;
    if (typeof window === "undefined") return true;
    return localStorage.getItem("cs_enable_filters") !== "false";
  });

  const toggleAssistant = () => {
    if (!envEnableAssistant) return;
    const val = !enableAssistant;
    setEnableAssistant(val);
    localStorage.setItem("cs_enable_assistant", String(val));
    window.dispatchEvent(new Event("feature-toggles-changed"));
  };

  const toggleFilters = () => {
    if (!envEnableFilters) return;
    const val = !enableFilters;
    setEnableFilters(val);
    localStorage.setItem("cs_enable_filters", String(val));
    window.dispatchEvent(new Event("feature-toggles-changed"));
  };

  useEffect(() => {
    const handleStorage = () => {
      setEnableAssistant(
        envEnableAssistant && localStorage.getItem("cs_enable_assistant") !== "false"
      );
      setEnableFilters(
        envEnableFilters && localStorage.getItem("cs_enable_filters") !== "false"
      );
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("feature-toggles-changed", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("feature-toggles-changed", handleStorage);
    };
  }, []);

  return {
    enableAssistant: envEnableAssistant && enableAssistant,
    enableFilters: envEnableFilters && enableFilters,
    envEnableAssistant,
    envEnableFilters,
    toggleAssistant,
    toggleFilters,
  };
}

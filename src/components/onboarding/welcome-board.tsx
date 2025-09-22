"use client";

import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

export const WelcomeBoard = () => {
  return (
    <Card className="max-w-md py-4 mx-auto mt-2 lg:max-w-xl lg:mt-4">
      <CardContent className="px-4 space-y-2">
        <CardHeader>
          <h2 className="mb-2 text-lg font-bold lg:text-xl">
            Hi 👋, Saya Muhamad Rinaldi Agus Pratama
          </h2>
          <p className="text-sm text-muted-foreground lg:text-base">
            Selamat datang di Portfolio Saya. Ada hal yang ingin Anda ketahui
            tentang saya? atau mungkin tentang Portfolio AI ini? Silakan klik
            salah satu thread di menu untuk memulai percakapan.
          </p>
        </CardHeader>

        <div className="flex gap-px text-xs lg:text-sm bg-accent p-3 rounded-md text-accent-foreground">
          <Lightbulb size={20} />
          <p className="text-muted-foreground">
            Jika Anda memiliki pertanyaan lain, jangan ragu untuk bertanya! di
            kotak pesan di bawah ini.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

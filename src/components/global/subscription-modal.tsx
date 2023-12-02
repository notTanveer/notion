"use client";
import { useSubscriptionModal } from "@/lib/providers/subscription-modal-provider";
import { useSupabaseUser } from "@/lib/providers/supabase-user-provider";
import { Dialog } from "@radix-ui/react-dialog";
import React, { use, useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Loader from "./Loader";

const SubscriptionModal = () => {
  const { open, setOpen } = useSubscriptionModal();
  const { subscription } = useSupabaseUser();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {subscription?.status === "active" ? (
        <DialogContent>PRO Already.</DialogContent>
      ) : (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade to a Pro Plan</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            To access Pro features you need to have a paid plan.
          </DialogDescription>
          <div className="flex justify-between items-center">
            <React.Fragment>
              <b className="text-3xl text-foreground">
                $12.99/<small>month</small>
              </b>
              <Button disabled={isLoading} >
                {isLoading ? <Loader /> : "Upgrade ✨"}
              </Button>
            </React.Fragment>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default SubscriptionModal;

export const dynamic = 'force-dynamic'

import { getWorkspaceDetails } from "@/lib/supabase/queries";
import React from "react";

const Workspace = async ({ params }: { params: { workspaceId: string } }) => {
  const { data, error} = await getWorkspaceDetails(params.workspaceId);

  return <>Workspace</>;
};

export default Workspace;

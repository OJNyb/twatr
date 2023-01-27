import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const personRouter = createTRPCRouter({
    getByUsername: publicProcedure
        .input(z.object({ username: z.string() }))
        .query(({ input }) => {
            return {
                id: "example-id",
                avatar: "/avatar.jpg",
                header: "/header.jpg",
                name: "Ole Programs",
                username: "oleprograms",
                address: "oleprograms@localhost:3000",
                summary:
                    "Pellentesque tristique vehicula fermentum. Morbi tincidunt sed lacus id auctor. Mauris sed rhoncus nisi. Ut sem ante, sodales sit amet nunc et, vestibulum dapibus neque. ",
                followersCount: 211,
                followingCount: 300,
            };
        }),
});

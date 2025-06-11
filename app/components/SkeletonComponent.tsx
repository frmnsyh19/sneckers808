import React from "react";
import { Box, Card, CardContent, Skeleton } from "@mui/material";

export const SkeletonComponent = ({ rows }: { rows: number }) => {
  return (
    <>
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
        {Array.from(new Array(rows)).map((_, index) => (
          <Card
            key={index}
            sx={{
              width: 250,
              borderRadius: 2,
              boxShadow: 3,
            }}>
            {/* Skeleton untuk gambar produk */}
            <Skeleton
              variant="rectangular"
              width="100%"
              height={150}
              animation="wave"
            />
            <CardContent>
              {/* Skeleton untuk judul produk */}
              <Skeleton
                variant="text"
                width="80%"
                height={20}
                animation="wave"
                sx={{ mb: 1 }}
              />
              {/* Skeleton untuk deskripsi harga */}
              <Skeleton
                variant="text"
                width="60%"
                height={20}
                animation="wave"
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

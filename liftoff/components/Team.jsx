import React from 'react'
import { Card, Metric, Text  } from "@tremor/react";

export const Team =  () => (
    <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
      <Text>Sales</Text>
      <Metric>$ 34,743</Metric>
    </Card>
  );
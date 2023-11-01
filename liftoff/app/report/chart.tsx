'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import { DonutChart } from "@tremor/react";

const data = [
  {
    Month: 'Appreciative',
    past: 18.11,
    parameter: 35.2,
  },
  {
    Month: 'Diplomatic',
    past: 17.911,
    parameter: 25,
  },
  {
    Month: 'Thoughtful',
    past: 5.912,
    parameter: 14.5,
  },
  {
    Month: 'Analysis',
    past: 7.12,
    parameter: 12.9,
  },
  {
    Month: 'informative',
    past: 11.6,
    parameter: 12.4,
  },
 
];

export default function Example() {
  return (
    <Card className="mt-8">
      <Title>Performance</Title>
      <Text>Comparison of your previous performance with the current performance</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['past' , 'parameter']}
        index="Month"
        colors={['red', 'yellow']}
        valueFormatter={(number: number) =>
          ` ${Intl.NumberFormat('us').format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}

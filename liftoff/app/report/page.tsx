"use client";

import { Card, Metric, Text, Title, BarList, Flex, Grid ,ProgressCircle ,  Callout } from "@tremor/react";
import Chart from "./chart";


const website = [
  { name: "Appreciative", value:0.3516046913664782  },
  { name: "Diplomatic", value:0.2504119293188701  },
  { name: "Direct", value: 0.14542083919398957 },
  { name: "informative", value:0.12896637759232712  },
  { name: "Thoughtful", value: 0.12359616252833504 },
];


// Generate 40 random numbers with higher precision
const randomNumbers = Array.from({ length: 40 }, () => Math.random());

// Update the values of the JSON objects in the data array
website.forEach((item, index) => {
  item.value = randomNumbers[index];
});

// Add the updated data array to an array named 'good'
const good = [...website];

console.log(good);



const data = [
  {
    category: "Website",
    stat: "10,234",
    data: good,
  },

]

export default function PlaygroundPage() {
  const value = 72;
  
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={2} className="gap-6">
        <Card key={data[0].category}>
          <Title>Tone Analysis</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            {/* <Metric>{data[0].stat}</Metric> */}
            {/* <Text>Total views</Text> */}
          </Flex>
          {/* <Flex className="mt-6">
            <Text>Pages</Text>
            <Text className="text-right">Views</Text>
          </Flex> */}
          <BarList
            data={data[0].data}
            valueFormatter={(number: number) =>
              Intl.NumberFormat("us").format(number).toString()
            }
            className="mt-2"
          />
        </Card>
        <div className="flex flex-col gap-y-5">
          strengths: 
          Clear and Accurate Explanation: The candidate's response is a strength as they provide a clear and accurate explanation of the difference between the time complexity of a map and an unordered_map. They correctly state that a map  is typically implemented as a Red-Black Tree, which ensures logarithmic time complexity for insertion, deletion, and search operations. On the other hand, an unordered_map is usually implemented as a hash table, resulting in average constant time complexity for these operations 
          <div >
          Areas for Improvement: 
          While the candidate provides an accurate explanation, they could enhance their response by offering more context or examples. For instance, they might explain that the logarithmic time complexity of the map is suitable for scenarios where data needs to be ordered, while the constant time complexity of the unordered_map is advantageous in cases where ordering is not a requirement. These examples would make the explanation more vivid and relatable, especially for interviewers who might not be as technically inclined.
          </div>
         
        </div>
      </Grid>
      <Chart />
      <ProgressCircle
      value= {40}
      radius={140}
      strokeWidth={25}
      className="py-8"
      tooltip="radius: 25, strokeWidth: 6"
      color="red"
    >
      <span className="h-100 w-100 rounded-full bg-fuchsia-100 flex items-center justify-center text-sm text-fuchsia-500 font-medium">
        legitmizer
      </span>
    </ProgressCircle>
    </main>
  );
}

"use client";

import { Card, Metric, Text, Title, BarList, Flex, Grid ,ProgressCircle,  Callout } from "@tremor/react";
import Chart from "./chart";
import React, { useState, useEffect } from 'react';


const website = [
  { name: "Appreciative", value:0.3516046913664782  },
  { name: "Diplomatic", value:0.2504119293188701  },
  { name: "Direct", value: 0.14542083919398957 },
  { name: "informative", value:0.12896637759232712  },
  { name: "Thoughtful",value: 0.12359616252833504 },
];


// Generate 40 random numbers with higher precision
const randomNumbers = Array.from({ length: 40 },() => Math.random());

// Update the values of the JSON objects in the data array
website.forEach((item, index) => {
  item.value = randomNumbers[index];
});

// Add the updated data array to an array named &apos;good&apos;
const good = [...website];

console.log(good);

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 600000); // 600000 milliseconds = 10 minutes

//     return () => clearTimeout(timer); // This will clear the timer if the component unmounts before the timer finishes
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
//         <div className="w-16 h-16 border-t-4 border-loader-blue bg-loader-background rounded-full animate-spin-slow"></div>
//         <div className="text-center">
//           <p className="font-serif text-2xl">"Confidence is the key to success."</p>
//           <p className="font-serif text-2xl">"The only way to do great work is to love what you do."</p>
//         </div>
//       </div>
//     );
//   }
  
//   return (
 
//   );
// }



export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600000); // 600000 milliseconds = 10 minutes

    return () => clearTimeout(timer); // This will clear the timer if the component unmounts before the timer finishes
  }, []);

  return (
    isLoading ? (
      <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
        <div className="w-16 h-16 border-t-4 border-loader-blue bg-loader-background rounded-full animate-spin-slow"></div>
        <div className="text-center">
          <p className="font-serif text-2xl">"Confidence is the key to success."</p>
          <p className="font-serif text-2xl">"The only way to do great work is to love what you do."</p>
        </div>
      </div>
    ) : (
      // Your main content goes here
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
          Clear and Accurate Explanation: The candidate&apos;s response is a strength as they provide a clear and accurate explanation of the difference between the time complexity of a map and an unordered_map. They correctly state that a map  is typically implemented as a Red-Black Tree&lsquo; which ensures logarithmic time complexity for insertion&lsquo; deletion&lsquo; and search operations. On the other hand&lsquo; an unordered_map is usually implemented as a hash table&lsquo; resulting in average constant time complexity for these operations 
          <div >
          Areas for Improvement: 
          While the candidate provides an accurate explanation&lsquo; they could enhance their response by offering more context or examples. For instance&lsquo; they might explain that the logarithmic time complexity of the map is suitable for scenarios where data needs to be ordered&lsquo; while the constant time complexity of the unordered_map is advantageous in cases where ordering is not a requirement. These examples would make the explanation more vivid and relatable&lsquo; especially for interviewers who might not be as technically inclined.
          </div>
         
        </div>
      </Grid>
      <Chart />
      <ProgressCircle
      value= {40}
      radius={140}
      strokeWidth={25}
      className="py-8"
      tooltip="radius: 25&lsquo; strokeWidth: 6"
      color="red"
    >
      <span className="h-100 w-100 rounded-full bg-fuchsia-100 flex items-center justify-center text-sm text-fuchsia-500 font-medium">
        legitmizer
      </span>
    </ProgressCircle>
    </main>
    )
  );
}

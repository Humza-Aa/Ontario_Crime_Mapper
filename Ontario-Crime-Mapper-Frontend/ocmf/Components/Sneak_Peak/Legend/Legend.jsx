import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Data from "../../../Data/Sneak_Peak/Legend/LegendD";

export default function Legend() {
  return (
    <>
      <Flex flexWrap="wrap" gap="10px" justifyContent="center">
        {Data.Legend.map((item, key) => {
          return (
            <>
              <Popover>
                <PopoverTrigger>
                  <Button p="20px">
                    {" "}
                    <Image
                      src={`/Icon_Images/${item.svg}.svg`}
                      alt="My SVG"
                      width={35}
                      height={35}
                    />
                    <Text pl="10px">{item.Name}</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </>
          );
        })}
      </Flex>
    </>
  );
}

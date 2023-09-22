import { Box, Button, Container, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { v4 as makeUUID } from 'uuid';

import { Modal, Pagination } from '@app/components';

import { CreateItemIcon, TrashItemIcon } from '../../components/icons';
import { dateFormat } from '../../utils/dateFormatter';
import { BACKGROUND_CONST } from '../../utils/textConstants';

import styles from './Forum.module.css';
import { CreateTopic } from './components/CreateTopic';
import { GridColumnTemplate } from './components/GridColumnTemplate';
import mock from './mock.json';

type GridItemType = {
  id: number | string /* пока что добавляю string для создания топика */;
  name: string;
  dateOfCreate: Date | string;
  commentsCount: number;
};

const titleItemList = ['Themes', 'Date', 'Comments', ''];
const itemsPerPage = 5;

export function ForumPage() {
  const [data, setData] = useState(mock.data.allTheme);
  const [rowItemList, setRowItemList] = useState<GridItemType[]>([]);
  const [itemOffset, setItemOffset] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const endOffset = itemOffset + itemsPerPage;
  const paginatedItems = rowItemList.slice(itemOffset, endOffset);

  useEffect(() => {
    const sortedList = data.sort((a, b) => b.dateOfCreate.localeCompare(a.dateOfCreate));
    setRowItemList(sortedList);
  }, [data]);

  const deleteRowItem = (id: number | string) => {
    const itemIndex = data.findIndex((it) => it.id === id);
    const newData = [...data];
    newData.splice(itemIndex, 1);
    setData(newData);
  };

  const onConfirm = (newItem: any) => {
    const newData = [...data];
    newData.push(newItem);
    setData(newData);
    onClose();
  };

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % rowItemList.length;
    setItemOffset(newOffset);
  };

  return (
    <Container maxW="container.lg" bg="transparent" color="#262626" h="100vh" pt="10vh" pb="10vh">
      <Flex
        bg={BACKGROUND_CONST}
        h="100%"
        className="forum"
        pr={10}
        pl={10}
        pb={5}
        flexDirection="column"
      >
        <Flex justifyContent="center" w="100%">
          <Button
            leftIcon={<CreateItemIcon />}
            variant="solid"
            colorScheme="teal"
            className={styles.newtopic}
            color="initial"
            size="md"
            onClick={onOpen}
          >
            New topic
          </Button>
        </Flex>
        <Box className={styles.forumlist}>
          <Box className={styles.forumlist_header}>
            <GridColumnTemplate isTitle itemList={titleItemList} />
          </Box>
          {paginatedItems.map((item) => (
            <GridColumnTemplate
              isTitle={false}
              key={makeUUID()}
              itemList={[
                item.name,
                dateFormat(item.dateOfCreate),
                item.commentsCount,
                <IconButton
                  aria-label="delete thread"
                  icon={<TrashItemIcon />}
                  onClick={() => deleteRowItem(item.id)}
                />,
              ]}
            />
          ))}
        </Box>
        <Pagination
          dataLength={rowItemList.length}
          handlePageClick={handlePageClick}
          itemsPerPage={itemsPerPage}
        />
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        body={<CreateTopic onClose={onClose} onConfirm={onConfirm} />}
        title="New topic"
      />
    </Container>
  );
}

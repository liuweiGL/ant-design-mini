import { InternalData, TSXMLProps } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Uploader from '../../../src/ImageUpload/index.axml';

export default (_: any, { defaultFileList }: TSXMLProps<InternalData>) => (
  <Page>
    <Container title="基本用法">
      <Uploader onChange="onChange" onUpload="onUpload" />
    </Container>
    <Container title="初始值">
      <Uploader
        defaultFileList={defaultFileList}
        onChange="onChange"
        onUpload="onUpload"
      />
    </Container>
    <Container title="上传最大限制">
      限制只能上传1个
      <Uploader maxCount={1} onChange="onChange" onUpload="onUpload" />
    </Container>
    <Container title="自定义移除">
      <Uploader
        defaultFileList={defaultFileList}
        onRemove="onRemove"
        onChange="onChange"
        onUpload="onUpload"
      />
    </Container>
    <Container title="自定义上传前">
      <Uploader
        defaultFileList={defaultFileList}
        onBeforeUpload="onBeforeUpload"
        onChange="onChange"
        onUpload="onUpload"
      />
    </Container>
  </Page>
);
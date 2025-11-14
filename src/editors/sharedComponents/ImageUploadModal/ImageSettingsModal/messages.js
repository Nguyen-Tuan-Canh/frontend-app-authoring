import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  // index
  titleLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.titleLabel',
    defaultMessage: 'Cài đặt hình ảnh',
    description: 'Label title for image settings modal.',
  },
  saveButtonLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.saveButtonLabel',
    defaultMessage: 'Lưu',
    description: 'Label for save button.',
  },
  replaceImageButtonLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.replaceImageButtonLabel',
    defaultMessage: 'Thay thế hình ảnh',
    description: 'Label for replace image button.',
  },

  // DimensionControls
  imageDimensionsLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.imageDimensionsLabel',
    defaultMessage: 'Kích thước hình ảnh',
    description: 'Label title for the image dimensions section.',
  },
  widthFloatingLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.widthFloatingLabel',
    defaultMessage: 'Chiều rộng',
    description: 'Floating label for width input.',
  },
  heightFloatingLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.heightFloatingLabel',
    defaultMessage: 'Chiều cao',
    description: 'Floating label for height input.',
  },
  unlockDimensionsLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.unlockDimensionsLabel',
    defaultMessage: 'Mở khóa kích thước',
    description: 'Label for button when unlocking dimensions.',
  },
  lockDimensionsLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.lockDimensionsLabel',
    defaultMessage: 'Khóa kích thước',
    description: 'Label for button when locking dimensions.',
  },
  decorativeDimensionCheckboxLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.decorativeDimensionCheckboxLabel',
    defaultMessage: 'Dùng phần trăm cho chiều rộng và chiều cao của hình ảnh',
    description: 'Checkbox label for whether or not an image uses percentages for width and height.',
  },

  // AltTextControls
  accessibilityLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.accessibilityLabel',
    defaultMessage: 'Trợ năng',
    description: 'Label title for accessibility section.',
  },
  altTextFloatingLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.altTextFloatingLabel',
    defaultMessage: 'Văn bản thay thế (Alt text)',
    description: 'Floating label title for alt text input.',
  },
  decorativeAltTextCheckboxLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.decorativeAltTextCheckboxLabel',
    defaultMessage: 'Hình ảnh chỉ mang tính trang trí (không cần văn bản thay thế).',
    description: 'Checkbox label for whether or not an image is decorative.',
  },

  // User Feedback Errors
  altTextError: {
    id: 'authoring.texteditor.imagesettingsmodal.error.altTextError',
    defaultMessage: 'Nhập văn bản thay thế hoặc đánh dấu hình ảnh chỉ mang tính trang trí.',
    description: 'Message presented to user when user attempts to save unaccepted altText configuration.',
  },
  altTextLocalFeedback: {
    id: 'authoring.texteditor.imagesettingsmodal.error.altTextLocalFeedback',
    defaultMessage: 'Vui lòng nhập văn bản thay thế',
    description: 'Message feedback for user below the alt text field.',
  },
  dimensionError: {
    id: 'authoring.texteditor.imagesettingsmodal.error.dimensionError',
    defaultMessage: 'Giá trị kích thước phải nhỏ hơn hoặc bằng 100.',
    description: 'Message presented to user when user attempts to save unaccepted dimension configuration.',
  },
  dimensionLocalFeedback: {
    id: 'authoring.texteditor.imagesettingsmodal.error.dimensionFeedback',
    defaultMessage: 'Vui lòng nhập giá trị nhỏ hơn hoặc bằng 100.',
    description: 'Message feedback for user below the dimension fields.',
  },
});

export default messages;

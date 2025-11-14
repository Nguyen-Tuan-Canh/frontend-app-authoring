import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  selectTypeTitle: {
    id: 'authoring.problemEditor.selectType.title',
    defaultMessage: 'Chọn loại bài tập',
    description: 'Title for select problem type modal',
  },
  cancelButtonLabel: {
    id: 'authoring.problemeditor.selecttype.cancelButton.label',
    defaultMessage: 'Hủy',
    description: 'Label for cancel button.',
  },
  cancelButtonAriaLabel: {
    id: 'authoring.problemeditor.selecttype.cancelButton.ariaLabel',
    defaultMessage: 'Hủy',
    description: 'Screen reader label for cancel button.',
  },
  selectButtonLabel: {
    id: 'authoring.problemeditor.selecttype.selectButton.label',
    defaultMessage: 'Chọn',
    description: 'Label for select button.',
  },
  selectButtonAriaLabel: {
    id: 'authoring.problemeditor.selecttype.selectButton.ariaLabel',
    defaultMessage: 'Chọn',
    description: 'Screen reader label for select button.',
  },

  // Problem Type Titles
  singleSelectTitle: {
    id: 'authoring.problemeditor.problemtype.singleselect.title',
    defaultMessage: 'Chọn một đáp án',
    description: 'Title for single select problem type',
  },
  multiSelectTitle: {
    id: 'authoring.problemeditor.problemtype.multiselect.title',
    defaultMessage: 'Chọn nhiều đáp án',
    description: 'Title for multi-select problem type',
  },
  dropdownTitle: {
    id: 'authoring.problemeditor.problemtype.dropdown.title',
    defaultMessage: 'Danh sách thả xuống',
    description: 'Title for dropdown problem type',
  },
  numericalInputTitle: {
    id: 'authoring.problemeditor.problemtype.numeric.title',
    defaultMessage: 'Nhập số',
    description: 'Title for numerical input problem type',
  },
  textInputTitle: {
    id: 'authoring.problemeditor.problemtype.textinput.title',
    defaultMessage: 'Nhập văn bản',
    description: 'Title for text input problem type',
  },
  advancedProblemTitle: {
    id: 'authoring.problemeditor.problemtype.advanced.title',
    defaultMessage: 'Bài tập nâng cao',
    description: 'Title for advanced problem type',
  },

  // Advanced Problem Type Titles
  blankProblemTitle: {
    id: 'authoring.problemeditor.advancedproblemtype.blank.title',
    defaultMessage: 'Bài tập trống',
    description: 'Title for blank advanced problem type',
  },
  circuitSchematicTitle: {
    id: 'authoring.problemeditor.advancedproblemtype.circuitschematic.title',
    defaultMessage: 'Trình tạo sơ đồ mạch điện',
    description: 'Title for circuit schematic builder advanced problem type',
  },
  customJavaScriptTitle: {
    id: 'authoring.problemeditor.advancedproblemtype.jsinput.title',
    defaultMessage: 'Hiển thị và chấm điểm tùy chỉnh bằng JavaScript',
    description: 'Title for custom JavaScript display and grading advanced problem type',
  },
  customPythonTitle: {
    id: 'authoring.problemeditor.advancedproblemtype.customgrader.title',
    defaultMessage: 'Nhập liệu được chấm bằng Python tùy chỉnh',
    description: 'Title for custom Python-evaluated input advanced problem type',
  },
  imageMappedTitle: {
    id: 'authoring.problemeditor.advancedproblemtype.image.title',
    defaultMessage: 'Nhập liệu trên ảnh',
    description: 'Title for image mapped input advanced problem type',
  },
  mathExpressionTitle: {
    id: 'authoring.problemeditor.advancedproblemtype.formula.title',
    defaultMessage: 'Nhập biểu thức toán học',
    description: 'Title for math expression input advanced problem type',
  },
  problemWithHintTitle: {
    id: 'authoring.problemeditor.advancedproblemtype.problemwithhint.title',
    defaultMessage: 'Bài tập với gợi ý thích ứng',
    description: 'Title for problem with adaptive hint advanced problem type',
  },

  // Problem Type Descriptions
  singleSelectDescription: {
    id: 'authoring.problemeditor.problemtype.singleselect.description',
    defaultMessage: 'Người học phải chọn đáp án đúng từ danh sách các lựa chọn.',
    description: 'Preview description for single select problem type',
  },
  multiSelectDescription: {
    id: 'authoring.problemeditor.problemtype.multiselect.description',
    defaultMessage: 'Người học phải chọn tất cả các đáp án đúng từ danh sách các lựa chọn.',
    description: 'Preview description for multi-select problem type',
  },
  dropdownDescription: {
    id: 'authoring.problemeditor.problemtype.dropdown.description',
    defaultMessage: 'Người học phải chọn đáp án đúng từ danh sách các lựa chọn.',
    description: 'Preview description for dropdown problem type',
  },
  numericalInputDescription: {
    id: 'authoring.problemeditor.problemtype.numeric.description',
    defaultMessage: 'Xác định một hoặc nhiều đáp án số đúng, được nhập trong ô trả lời.',
    description: 'Preview description for numerical input problem type',
  },
  textInputDescription: {
    id: 'authoring.problemeditor.problemtype.textinput.description',
    defaultMessage: 'Xác định một hoặc nhiều đáp án dạng văn bản, bao gồm số và ký tự đặc biệt, được nhập trong ô trả lời.',
    description: 'Preview description for text input problem type',
  },
  advancedProblemDescription: {
    id: 'authoring.problemeditor.problemtype.advanced.description',
    defaultMessage: 'Một loại bài tập nâng cao.',
    description: 'Description for advanced problem type',
  },

  // Problem Type Instructions
  singleSelectInstruction: {
    id: 'authoring.problemeditor.problemtype.singleselect.instruction',
    defaultMessage: 'Nhập các lựa chọn cho dạng chọn một bên dưới và đánh dấu đáp án đúng. Người học phải chọn một đáp án đúng.',
    description: 'Instruction for single select problem type',
  },
  multiSelectInstruction: {
    id: 'authoring.problemeditor.problemtype.multiselect.instruction',
    defaultMessage: 'Nhập các lựa chọn cho dạng chọn nhiều bên dưới và đánh dấu tất cả đáp án đúng. Người học phải chọn đầy đủ tất cả đáp án đúng.',
    description: 'Instruction for multi-select problem type',
  },
  dropdownInstruction: {
    id: 'authoring.problemeditor.problemtype.dropdown.instruction',
    defaultMessage: 'Nhập các lựa chọn cho danh sách thả xuống bên dưới và đánh dấu đáp án đúng. Người học phải chọn một đáp án đúng.',
    description: 'Instruction for dropdown problem type',
  },
  numericalInputInstruction: {
    id: 'authoring.problemeditor.problemtype.numeric.instruction',
    defaultMessage: 'Nhập các đáp án số đúng bên dưới. Người học phải nhập một đáp án đúng.',
    description: 'Instruction for numerical input problem type',
  },
  textInputInstruction: {
    id: 'authoring.problemeditor.problemtype.textinput.instruction',
    defaultMessage: 'Nhập các đáp án dạng văn bản bên dưới và đánh dấu đáp án đúng. Người học phải nhập một đáp án đúng.',
    description: 'Instruction for text input problem type',
  },
});

export default messages;

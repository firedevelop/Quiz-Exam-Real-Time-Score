import re

def clean_js_questions(file_path):
    with open(file_path, 'r') as file:
        # Read the content of the JavaScript file
        data = file.read()

    # Regex pattern to find each question object
    pattern = r'(?<=\{)[^{}]*\}'

    # Find all the question objects in the file
    questions = re.findall(pattern, data)

    # Set to keep track of the IDs we've seen
    seen_ids = set()

    cleaned_questions = []

    # Process each question and add the "id" field while removing duplicates
    for index, question in enumerate(questions):
        # Remove extra spaces and ensure formatting
        question = question.strip()

        # Check if 'id' already exists in the question
        if "id:" not in question:
            # Add id field
            question = f"id: {index + 1}, {question}"

        # Add to set of seen ids
        seen_ids.add(index + 1)

        # Fix the comma placement and trailing commas correctly
        question = re.sub(r',\s*}', '}', question)

        # Add the corrected question to the list, ensuring proper formatting
        if index < len(questions) - 1:
            cleaned_questions.append(f"{{{question}}}, ")
        else:
            cleaned_questions.append(f"{{{question}}}")

    # Join all the corrected questions
    cleaned_data = "export const questions = [\n" + "".join(cleaned_questions) + "\n];"

    # Write the corrected JavaScript code back to a new file
    with open('cleaned_questions.js', 'w') as output_file:
        output_file.write(cleaned_data)
    
    print("JavaScript file cleaned successfully! Output saved as 'cleaned_questions.js'.")

# Usage
file_path = 'questions-entornos-de-desarrollo.js'  # Replace with your file path
clean_js_questions(file_path)

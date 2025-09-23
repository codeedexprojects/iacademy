// Common types and interfaces for the application

/**
 * @typedef {Object} NavLink
 * @property {string} href - The URL path
 * @property {string} label - Display text for the link
 */

/**
 * @typedef {Object} User
 * @property {string} id - Unique identifier
 * @property {string} name - User's full name
 * @property {string} email - User's email address
 * @property {string} role - User role (student, faculty, admin)
 */

/**
 * @typedef {Object} Course
 * @property {string} id - Course identifier
 * @property {string} title - Course title
 * @property {string} description - Course description
 * @property {string} instructor - Instructor name
 * @property {number} credits - Number of credits
 * @property {string[]} prerequisites - Required prerequisite courses
 */

/**
 * @typedef {Object} Program
 * @property {string} id - Program identifier
 * @property {string} name - Program name
 * @property {string} degree - Degree type (Bachelor, Master, PhD)
 * @property {string} department - Department name
 * @property {Course[]} courses - List of courses in the program
 */

export {}

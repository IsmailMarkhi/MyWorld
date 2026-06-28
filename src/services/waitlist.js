import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../lib/firebase";

/**
 * Join OneLink beta waitlist
 */
export async function joinWaitlist(email) {
  try {
    // Normalize email
    const normalizedEmail = email
      ?.toLowerCase()
      .trim();

    // Validate
    if (!normalizedEmail) {
      throw new Error(
        "Email address is required."
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      throw new Error(
        "Please enter a valid email address."
      );
    }

    // Collection reference
    const waitlistRef = collection(
      db,
      "beta_waitlist"
    );

    // Check duplicates
    const existingQuery = query(
      waitlistRef,
      where("email", "==", normalizedEmail)
    );

    const existingUser =
      await getDocs(existingQuery);

    if (!existingUser.empty) {
      throw new Error(
        "You already joined the waitlist."
      );
    }

    // Create user
    const docRef = await addDoc(
      waitlistRef,
      {
        email: normalizedEmail,

        // plan info
        plan: "30-day-subscription",
        source: "landing-page",

        // browser info
        userAgent:
          navigator.userAgent,

        language:
          navigator.language,

        timezone:
          Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone,

        platform:
          navigator.platform,

        // timestamps
        createdAt:
          serverTimestamp(),
      }
    );

    return {
      success: true,
      id: docRef.id,
      message:
        "Welcome to OneLink Beta!",
    };
  } catch (error) {
    console.error(
      "Firebase Waitlist Error:",
      error
    );

    throw new Error(
      error.message ||
        "Something went wrong. Please try again."
    );
  }
}
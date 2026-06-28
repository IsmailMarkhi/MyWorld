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
 * Join OneLink Beta Waitlist
 */
export async function joinWaitlist(email) {
  // Normalize email
  const normalizedEmail = email
    ?.toLowerCase()
    .trim();

  // Validation
  if (!normalizedEmail) {
    throw new Error(
      "Email address is required."
    );
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !emailRegex.test(normalizedEmail)
  ) {
    throw new Error(
      "Please enter a valid email address."
    );
  }

  try {
    // Collection reference
    const waitlistRef = collection(
      db,
      "beta_waitlist"
    );

    // Check duplicates
    const existingQuery = query(
      waitlistRef,
      where(
        "email",
        "==",
        normalizedEmail
      )
    );

    const existingUser =
      await getDocs(existingQuery);

    if (!existingUser.empty) {
      throw new Error(
        "You already joined the waitlist."
      );
    }

    // Create record
    const docRef = await addDoc(
      waitlistRef,
      {
        // identity
        email: normalizedEmail,

        // business
        plan: "beta-monthly",
        source: "landing-page",

        // lifecycle
        status: "reserved",
        paymentStatus: "pending",
        subscriptionStatus:
          "inactive",

        // Lemon Squeezy
        lemonCustomerId: null,
        lemonOrderId: null,
        lemonSubscriptionId:
          null,

        // browser info
        userAgent:
          navigator.userAgent,
        language:
          navigator.language,
        timezone:
          Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone,

        // timestamps
        createdAt:
          serverTimestamp(),
        updatedAt:
          serverTimestamp(),
      }
    );

    return {
      success: true,
      id: docRef.id,
      email: normalizedEmail,
      status: "reserved",
      message:
        "Welcome to OneLink Beta!",
    };
  } catch (error) {
    console.error(
      "Firebase Waitlist Error:",
      error
    );

    throw error;
  }
}
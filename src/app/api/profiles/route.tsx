import type { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';
import admin from 'firebase-admin';

const db = admin.firestore();

const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const session = request.cookies.get('session');

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { user } = session;
    const postsRef = db.collection('posts');
    const querySnapshot = await postsRef
      .where('authorId', '==', user.id)
      .select('id', 'title', 'published', 'createdAt')
      .get();

    const posts = querySnapshot.docs.map((doc) => doc.data());

    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { user } = session;
    const subscriptionPlan = await getUserSubscriptionPlan(user.id);

    // If user is on a free plan.
    // Check if user has reached limit of 3 posts.
    if (!subscriptionPlan?.isPro) {
      const postsRef = db.collection('posts');
      const querySnapshot = await postsRef
        .where('authorId', '==', user.id)
        .get();
      const count = querySnapshot.size;

      if (count >= 3) {
        throw new RequiresProPlanError();
      }
    }

    const json = await req.json();
    const body = postCreateSchema.parse(json);

    const postRef = db.collection('posts').doc();
    await postRef.set({
      title: body.title,
      content: body.content,
      authorId: session.user.id,
    });

    const post = { id: postRef.id };

    return new Response(JSON.stringify(post));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    if (error instanceof RequiresProPlanError) {
      return new Response('Requires Pro Plan', { status: 402 });
    }

    return new Response(null, { status: 500 });
  }
}

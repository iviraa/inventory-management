import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expensesByCategoryRaw = await prisma.expenseByCategory.findMany({
      orderBy: {
        date: "desc",
      },
    });
    const expensesByCategory = expensesByCategoryRaw.map((expense) => ({
      ...expense,
      amount: expense.amount.toString(),
    }));

    res.status(200).json(expensesByCategory);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving expense metrics" });
  }
};
